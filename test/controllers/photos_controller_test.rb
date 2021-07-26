require "test_helper"

class PhotosControllerTest < ActionDispatch::IntegrationTest
  test "should get photos" do
    get photos_photos_url
    assert_response :success
  end
end
