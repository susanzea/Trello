class CreateWorkspaces < ActiveRecord::Migration[6.1]
  def change
    create_table :workspaces do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    remove_column :boards, :user_id
    add_column :boards, :workspace_id, :integer
  end
end
