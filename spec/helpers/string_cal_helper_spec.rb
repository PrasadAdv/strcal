require 'rails_helper'

RSpec.describe 'StringCalHelper', type: :request do
  include StringCalHelper

  describe 'extract_digits' do
    it 'extracts positive and negative digits from given string' do
      input_string = '\2\3,4;-5,2\n-4;6'
      extracted_digits = extract_digits(input_string)
      expect(extracted_digits).to eq(
        { positive_digits: [2, 3, 4, 2, 6], negative_digits: [-5,-4] }
      )
    end
  end
end
