class ExercisesController < ApplicationController
  require 'will_paginate/array'
   
  def initialize
    super
     puts 'ExercisesController init'
   end

  
  def index
  # for i in 1..500000 do
  #   puts "index !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  # end

      puts "index !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
      puts "index 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"


     @exercises = Exercise.all



   end

   
   def create_set2
     # render plain: params.inspect

    @exercise = Exercise.find(params[:id])
     
     if @exercise.update_attributes(params[:exercise]
       .permit(:name, exercise_sets_attributes: [:id, :exercise_id, :weight, :repetition]))
       puts "Successfully updated survey."
     else
       puts "fail !!!!!!!!!!!!!"
     end        
                puts "______________________________________"
                        puts "______________________________________"
   end
   
   def create_set

    #render plain: params.inspect
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
  

  def load_exercise
     puts "load_exercise !!!!!!!!!!!!!!!!!!!!!!!!!!!!"

 

     @exercise = Exercise.find(61)
    @exercise_sets = @exercise.exercise_sets
    
    
     # @q = ExerciseSet.paginate(:page => params[:page], :per_page => 2)
#

oid = 61;

    sql = ["SELECT id, date(created_at) as date, repetition,weight , ROW_NUMBER () OVER (
 PARTITION BY date(created_at)
 ORDER BY
 date(created_at) desc
 ) as rn
FROM exercise_sets where exercise_id=?", oid];


    # @q = ExerciseSet.find_by_sql(sql);
    # paged = arr.paginate(:per_page => 2)     
    @q = ExerciseSet.paginate_by_sql(sql, :page => params[:page], :per_page => 50)
  # @q = arr.paginate(:page => params[:page], :per_page => 2)

          # render json: {status: @q}

          render partial: 'history_items'


  end
  def start_exercise
    # render plain: params.inspect
     puts "start_exercise !!!!!!!!!!!!!!!!!!!!!!!!!!!!"
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
