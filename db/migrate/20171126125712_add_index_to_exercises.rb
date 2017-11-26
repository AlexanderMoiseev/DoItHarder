class AddIndexToExercises < ActiveRecord::Migration[5.1]
  def change
    add_index :exercises, :user_id
  end
end
