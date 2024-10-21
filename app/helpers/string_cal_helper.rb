module StringCalHelper
  # extracts digits from given input string
  def extract_digits(string)
    digits = string.scan(/-?\d+/).map(&:to_i)
    digits.each_with_object({ positive_digits: [], negative_digits: [] }) do |d, res|
      if d > 0
        res[:positive_digits] << d
      elsif d < 0
        res[:negative_digits] << d
      end
    end
  end
end
