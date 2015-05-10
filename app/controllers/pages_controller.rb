class PagesController < ApplicationController
  def home
  end

  def events
  end

  def memories
    @memories = Memories.all
  end

  def stories
  end

  def rsvp
  end
  
private
  def memories_params
    params.require(:image).permit(:name, :age)
  end
  
end