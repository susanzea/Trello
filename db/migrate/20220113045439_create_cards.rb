class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :user_id, null: false
      t.integer :list_id, null: false
      t.datetime :due_date
      t.timestamps
    end
  end
end
