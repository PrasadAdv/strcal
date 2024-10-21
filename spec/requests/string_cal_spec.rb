require 'rails_helper'

RSpec.describe 'StringCals', type: :request do
  describe 'add' do
    let(:str_instance) { StringCalController.new }

    before do
      allow_any_instance_of(StringCalController).to receive(:is_string_valid?).and_call_original
    end

    context 'string validation' do
      it 'returns true upon successful validation' do
        allow_any_instance_of(StringCalController).to receive(:params).and_return(ActionController::Parameters.new(string_cal: { input_string: '\2\3,4;,2\n;6' }))
        expect(str_instance.is_string_valid?).to be true
      end

      it 'raises error upon failed validation' do
        allow_any_instance_of(StringCalController).to receive(:params).and_return(ActionController::Parameters.new(string_cal: { input_string: '\2\3,4;,-2\n;-6' }))
        expect(str_instance.is_string_valid?).to be false
      end
    end

    context 'digit addition' do
      it 'adds up the digits in given string' do
        post '/add', params: { string_cal: { input_string: '1,2,3' } }
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)).to eq({ 'response' => 6 })
      end

      it 'returns error response if string is not valid' do
        post '/add', params: { string_cal: { input_string: '1,2,-3' } }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)).to eq({ 'error' => 'Negative numbers are not allowed [-3]' })
      end
    end
  end
end
