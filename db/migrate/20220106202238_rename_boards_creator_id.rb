class RenameBoardsCreatorId < ActiveRecord::Migration[6.1]
  def change
    rename_column :boards, :creator_id, :user_id
  end
end
