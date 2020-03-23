from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/calculate', methods=['GET', 'POST'])
def calculate():
    if request.method == 'GET':
        number = int(request.args.get('number', None))
        if number:
            divList = [i for i in range(1, number+1) if number % i == 0]
            isPrime = (True if len(divList)==2 else False)
            
            return {'divList': divList, 'isPrime': isPrime}
        return "Nenhum número foi inserido"
