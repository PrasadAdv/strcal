class StringCalController < ApplicationController
  protect_from_forgery

  include AbstractController::Rendering
  include StringCalHelper

  def index
  end

  def add
    if is_string_valid?
      sum =  @digits[:positive_digits].sum
      render json: { response: sum }, status: :ok
    else
      render json: { error: "negative numbers are not allowed #{@digits[:negative_digits]}" }, status: :unprocessable_entity
    end
  end

  private

  def is_string_valid?
    @string = str_params[:input_string]
    @digits = extract_digits(@string)
    return true if @digits[:negative_digits].empty?
    return false
  end

  def str_params
    params.require(:string_cal).permit(:input_string)
  end
end
