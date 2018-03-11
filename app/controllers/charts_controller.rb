class ChartsController < ApplicationController
  def show_exercise_sets
 	@exercise = Exercise.find(params[:exercise_id])




render json: @exercise.exercise_sets.group("to_date(to_char(created_at, 'YYYY/MM/DD'), 'YYYY/MM/DD') ").minimum(:weight)

    # render json: @exercise.exercise_sets.group_by_day(:created_at).minimum(:weight)


  end
end
