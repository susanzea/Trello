class RemoveCardsDescriptNullFalse < ActiveRecord::Migration[6.1]
  def change
    change_column_null :cards, :description, true
  end
end
