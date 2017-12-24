class ExercisesController < ApplicationController
  
  
  def initialize
    super
     puts 'ExercisesController init'
   end

  
  def index
     @exercises = Exercise.all
   end

   
   def create_set2
     render plain: params.inspect
        puts "create_set2"
                puts "______________________________________"
                        puts "______________________________________"
   end
   
   def create_set
    # render plain: params.inspect
      @exercise = Exercise.find(params[:exercise_id])
      
      exercise_set = @exercise.exercise_sets.new(exercise_set_params)
      
      puts exercise_set.repetition
       puts exercise_set.weight
exercise_set.save
# :exercise_sets
                           
    # @exercise_set = Exercise_set.
      
      
   end
   
   
  def new
   
  end
  
  def start_exercise
    @exercise = Exercise.find(params[:id])
  end
  
  def show
    @exercise = Exercise.find(params[:id])
    
  end
  
  def edit
    @exercise = Exercise.find(params[:id])
  end
  
  
  
  def create    
   
    @exercise =  current_user.exercises.new(exercise_params)
     
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
    
    def exercise_set_params
      params.require(:exercise_set).permit(:repetition, :weight, :exercise_id)
    end
    
end
