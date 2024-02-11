export interface GetUsersProjectResponse {
  id: string;
  parent_id: null;
  order: number;
  color: string;
  name: string;
  comment_count: number;
  is_shared: boolean;
  is_favorite: boolean;
  is_inbox_project: boolean;
  is_team_inbox: boolean;
  url: string;
  view_style: string;
}

export interface AddNewProjectResponse {
  id: string;
  parent_id: null;
  order: number;
  color: string;
  name: string;
  comment_count: number;
  is_shared: boolean;
  is_favorite: boolean;
  is_inbox_project: boolean;
  is_team_inbox: boolean;
  url: string;
  view_style: string;
}

export interface AddNewTaskResponse {
  id: string;
  assigner_id: null;
  assignee_id: null;
  project_id: string;
  section_id: null;
  parent_id: null;
  order: number;
  content: string;
  description: string;
  is_completed: boolean;
  labels: any[];
  priority: number;
  comment_count: number;
  creator_id: string;
  created_at: Date;
  due: null;
  url: string;
  duration: null;
}
