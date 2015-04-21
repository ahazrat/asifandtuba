class PagesController < ApplicationController
  def home
  end

  def rsvp
  end

  def events
  end

  def memories
  end

  def stories
  end
  
  @pictures = [
    {
      title: 'image one',
      url: 'http://i.imgur.com/QCSlS3o.jpg',
      thumb: 'http://i.imgur.com/QCSlS3o.jpg',
      scale: 100,
      hpan: 50,
      vpan: 50
    },
    {
      title: 'image one',
      url: 'http://i.imgur.com/QCSlS3o.jpg',
      thumb: 'http://i.imgur.com/QCSlS3o.jpg',
      scale: 100,
      hpan: 50,
      vpan: 50
    }
  ]
  
end
