class ChangeColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :calenders, :date, :day
  end
end
