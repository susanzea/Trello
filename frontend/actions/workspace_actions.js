import { fetchAllUserWorkspaces} from "../util/workspace_api_util";

export const RECEIVE_USER_WORKSPACES = `RECEIVE_USER_WORKSPACES`;

const receiveUserWorkspaces = () => {
    return {
        type: RECEIVE_USER_WORKSPACES,
        workspaces
    }
}