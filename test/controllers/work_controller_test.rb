require "test_helper"

class WorkControllerTest < ActionDispatch::IntegrationTest
  test "should get cubo" do
    get work_cubo_url
    assert_response :success
  end
end
