class CreateChores < ActiveRecord::Migration[6.1]
  def change
    create_table :chores do |t|
      t.string "to_do"
      t.integer "calender_id"
    end
  end
end
