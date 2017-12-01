class RoutinesController < ApplicationController
  def index
    
    @routines = Routine.all
  end
  
  
  def new
    puts "RandomRandomRandomRandomRandomRandomRandomRandomRandomRandomRandomRandomRandomRandom"
  end
  
  
  
end
