class ChartsController < ApplicationController
  def show_exercise_sets

  	puts 'sadasdasdasdasd'
  	puts params
  
# ex = params[:exercise]

# puts params
# puts ex.id

    render json: ExerciseSet.group_by_day(:created_at).minimum(:weight)
  end
end
