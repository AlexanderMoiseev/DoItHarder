class CreateExerciseSets < ActiveRecord::Migration[5.1]
  def change
    create_table :exercise_sets do |t|
      t.integer :repetition
      t.decimal :weight
      t.references :exercise, foreign_key: true
      t.references :routine, foreign_key: true

      t.timestamps
    end
  end
end
