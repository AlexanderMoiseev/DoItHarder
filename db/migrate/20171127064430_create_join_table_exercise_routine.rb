class CreateJoinTableExerciseRoutine < ActiveRecord::Migration[5.1]
  def change
    create_join_table :exercises, :routines do |t|
      # t.index [:exercise_id, :routine_id]
      # t.index [:routine_id, :exercise_id]
    end
  end
end
