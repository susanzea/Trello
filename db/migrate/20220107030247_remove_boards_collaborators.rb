class RemoveBoardsCollaborators < ActiveRecord::Migration[6.1]
  def change
    remove_column :boards, :collaborator_ids
  end
end
