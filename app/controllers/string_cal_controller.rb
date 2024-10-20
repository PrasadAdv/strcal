class StringCalController < ApplicationController
  include StringCalHelper

  before_action :validate_string, only: :add

  def index
  end

  def add
  end

  private
  def validate_string
  end
end
