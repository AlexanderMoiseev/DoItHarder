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
    
    
    # render plain: params.inspect

    
  end
  
  
  def add_exercise
     puts 'add_exercise'
    
     @routine = Routine.find(params[:id])
     # render plain: params.inspect
    

   render_to_string 'add_exercise'

      # render_to_string :action => "show_exercises"
     # respond_to do |format|
   #      format.html { redirect_to action: 'show_exercises', id: @routine.id}
   #    end
     
     
          #
     #
     # @exercise =  current_user.exercises.new(exercise_params)
     #
     #  if @exercise.save
     #     redirect_to @exercise
     #   else
     #     render 'new'
     #   end
     #
      

       # p = Routine.new
    #    p.name = "SomeRoutine"
    #    p.user_id = 2
    #
    #    p.exercises << @exercise
    #    p.save
    
    
    
    
  end
  
  private
    def routine_params
      params.require(:routine).permit(:name)
    end
    
end
