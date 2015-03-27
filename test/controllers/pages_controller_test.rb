require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get rsvp" do
    get :rsvp
    assert_response :success
  end

  test "should get events" do
    get :events
    assert_response :success
  end

  test "should get memories" do
    get :memories
    assert_response :success
  end

  test "should get stories" do
    get :stories
    assert_response :success
  end

end
