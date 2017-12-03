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
  
  
  private
    def routine_params
      params.require(:routine).permit(:name)
    end
    
end
