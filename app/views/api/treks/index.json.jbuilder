json.treks do
    json.array! @treks, partial: 'api/treks/index', as: :trek
end