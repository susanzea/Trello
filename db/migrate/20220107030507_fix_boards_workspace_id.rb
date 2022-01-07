class FixBoardsWorkspaceId < ActiveRecord::Migration[6.1]
  def change
    change_column_null :boards, :workspace_id, false
  end
end
