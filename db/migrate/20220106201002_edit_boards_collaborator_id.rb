class EditBoardsCollaboratorId < ActiveRecord::Migration[6.1]
  def change
    remove_column :boards, :collaborator_ids
    add_column :boards, :collaborator_ids, :integer
  end
end
