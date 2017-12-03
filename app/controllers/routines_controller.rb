class RoutinesController < ApplicationController
  def index
    
    @routines = Routine.all
  end
  
  
  def new
    
  end
  
  def show_exercises
    # render plain: params.inspect
      @routine = Routine.find(params[:id])
    
  end
  
end
