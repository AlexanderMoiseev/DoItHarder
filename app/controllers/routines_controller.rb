class RoutinesController < ApplicationController
  def index
    @routines = Routine.all
  end
  
  def new
    
  end
  
  def show
    @routine = Routine.find(params[:id])
  end
  
  def create    
    @routine =  current_user.routines.new(routine_params)
     
     if @routine.save
        redirect_to @routine
      else
        render 'new'
      end      
  end
  
  
  def show_exercises
     # render plain: params.inspect
      @routine = Routine.find(params[:id])
  end
  
  def create_exercise
    @routine = Routine.find(params[:id])
    @exercise =  current_user.exercises.new(exercise_params)
    
     if @exercise.save
         redirect_to routines_show_exercises_path(:id => @routine.id)
         @routine.exercises << @exercise
      else
        render 'errorHereTestIt'
      end
  end
  
  
  def add_exercise
     @routine = Routine.find(params[:id])
  end
  
  private
    def routine_params
      params.require(:routine).permit(:name)
    end
    
    def exercise_params
        params.require(:exercise).permit(:name)
      end
    
end
