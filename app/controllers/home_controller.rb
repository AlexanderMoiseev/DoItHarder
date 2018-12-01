class HomeController < ApplicationController
  def index
  	puts 'home index!!!!!!!!!!!!!!!!!!!!';
    @message = "Hi there2" 
    render 'index'
  end

  def about
  	puts 'about'

  end
end
