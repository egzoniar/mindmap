import { MindmapStateType } from '../types/mindmap.types';
import { User } from './user.types';

export type AppState = {
  user: User;
  mindmaps: MindmapStateType[];
  openedMindmap?: MindmapStateType;
}