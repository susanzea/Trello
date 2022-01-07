class CreateBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.integer :collaborator_ids, null: false
      t.timestamps
    end
  end
end
