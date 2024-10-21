class StringCalController < ApplicationController
  protect_from_forgery

  include AbstractController::Rendering
  include StringCalHelper

  # displays UI
  def index
  end

  # calulates the sum of digits
  def add
    if is_string_valid?
      sum =  @digits[:positive_digits].sum
      render json: { response: sum }, status: :ok
    else
      render json: { error: "Negative numbers are not allowed #{@digits[:negative_digits]}" }, status: :unprocessable_entity
    end
  end

  private

  # validates if string has no negative digits
  def is_string_valid?
    @string = str_params[:input_string]
    @digits = extract_digits(@string)
    return true if @digits[:negative_digits].empty?
    return false
  end

  # strong parameters
  def str_params
    params.require(:string_cal).permit(:input_string)
  end
end
