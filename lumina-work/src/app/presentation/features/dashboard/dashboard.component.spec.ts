import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { BoardService } from '../../../services/board.service';
import { AppStateService } from '../../../services/app-state.service';
import { Column } from '../../../domain/models/column';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockColumns: Column[] = [
    { columnId: '1', name: 'Todo', color: '#fff' },
    { columnId: '2', name: 'Done', color: '#000' },
  ];

  const boardServiceMock = {
    columns: signal(mockColumns),
    addTask: vi.fn(),
    updateTask: vi.fn(),
    deleteTask: vi.fn(),
    addColumn: vi.fn(),
    updateColumn: vi.fn(),
    deleteColumn: vi.fn(),
  };

  const appStateMock = {
    focusMode: signal(false),
    fontSize: signal<'small' | 'medium' | 'large'>('medium'),
    clearReading: signal(false),
    lowAttention: signal(false),
    guidedSteps: signal(false),
    darkMode: signal(false),
    highContrast: signal(false),
    setOpenLists: vi.fn(),
  };

  beforeEach(async () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('Deep Work');

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        { provide: BoardService, useValue: boardServiceMock },
        { provide: AppStateService, useValue: appStateMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return columns from boardService', () => {
    expect(component.columns.length).toBe(2);
  });

  it('should return focusActivity from localStorage', () => {
    expect(component.focusActivity).toBe('Deep Work');
  });

  it('should open task modal for new task', () => {
    component.openTaskModal(mockColumns[0]);

    expect(component.showTaskModal()).toBe(true);
    expect(component.selectedColumn()?.columnId).toBe('1');
  });

  it('should close task modal', () => {
    component.openTaskModal(mockColumns[0]);
    component.closeTaskModal();

    expect(component.showTaskModal()).toBe(false);
    expect(component.selectedColumn()).toBeNull();
  });

  it('should save new task', () => {
    component.openTaskModal(mockColumns[0]);

    component.taskForm.set({
      name: 'Nova Task',
      description: 'Descrição',
      columnId: '1',
    });

    component.saveTask();

    expect(boardServiceMock.addTask).toHaveBeenCalledWith('1', 'Nova Task', 'Descrição');
  });

  it('should update existing task', () => {
    const task = { id: 't1', name: 'Old', description: 'Old desc' };

    component.openTaskModal(mockColumns[0], task as any);

    component.taskForm.set({
      name: 'Updated',
      description: 'Updated desc',
      columnId: '1',
    });

    component.saveTask();

    expect(boardServiceMock.updateTask).toHaveBeenCalledWith('t1', 'Updated', 'Updated desc');
  });

  it('should delete task when confirmed', () => {
    component.deleteTask('t1');

    expect(boardServiceMock.deleteTask).toHaveBeenCalledWith('t1');
  });

  it('should open list modal', () => {
    component.openListModal();

    expect(component.showListModal()).toBe(true);
  });

  it('should save new list', () => {
    component.openListModal();

    component.listForm.set({
      name: 'Nova Lista',
      color: '#123456',
    });

    component.saveList();

    expect(boardServiceMock.addColumn).toHaveBeenCalledWith('Nova Lista', '#123456');
  });

  it('should update existing list', () => {
    component.openListModal(mockColumns[0]);

    component.listForm.set({
      name: 'Atualizada',
      color: '#000000',
    });

    component.saveList();

    expect(boardServiceMock.updateColumn).toHaveBeenCalledWith('1', 'Atualizada', '#000000');
  });

  it('should delete list when confirmed', () => {
    component.deleteList('1');

    expect(boardServiceMock.deleteColumn).toHaveBeenCalledWith('1');
  });

  it('should update open lists count when column collapse toggles', () => {
    component.onToggleColumnCollapse('1');

    expect(appStateMock.setOpenLists).toHaveBeenCalledWith(2);
  });
});
