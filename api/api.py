from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['GET','POST'])
def calculate():
    teststring = request.json
    number = 14
    divList = []
    for i in range(1, number+1):
        if number%i == 0:
            divList.append(i)
    return {'playerName': teststring}
