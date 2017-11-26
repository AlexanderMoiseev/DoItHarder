class ExercisesController < ApplicationController
  def index
     @exercises = Exercise.all
   end
   
   
  def new
  end
  
  def show
    @exercise = Exercise.find(params[:id])
    
  end
  
  def edit
    @exercise = Exercise.find(params[:id])
  end
  
  def create
    # render plain: params[:exercise].inspect
    
    @exercise = Exercise.new(exercise_params)

     @exercise.save
     
     if @exercise.save
        redirect_to @exercise
      else
        render 'new'
      end
  end
  
  def update
    @exercise = Exercise.find(params[:id])
 
    if @exercise.update(exercise_params)
      redirect_to @exercise
    else
      render 'edit'
    end
  end
  
  

  def destroy
    @exercise = Exercise.find(params[:id])
    @exercise.destroy
 
    redirect_to exercises_path
  end
  
  
  private
    def exercise_params
      params.require(:exercise).permit(:name)
    end
end
