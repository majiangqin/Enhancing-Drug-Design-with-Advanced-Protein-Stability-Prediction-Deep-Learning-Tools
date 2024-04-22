
from flask import Flask, render_template, request, url_for
import csv

app = Flask(__name__)

def read_mutations_from_csv(file_path):
    mutations_data = {}
    with open(file_path, mode='r', encoding='utf-8-sig') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            min_ddG = row['min_ddG']
            max_ddG = row['max_ddG']
            pdb_id = row['PDB_ID']
            mutation_code = row['Mutation Code']
            mutation = row['Mutation']
            position = int(row['Position'])
            ddG = float(row['ddG (kcal/mol)'])
            if pdb_id not in mutations_data:
                mutations_data[pdb_id] = {  
                    'min_ddG': min_ddG,  
                    'max_ddG': max_ddG,
                    'mutations': {}}

            mutations_data[pdb_id]['mutations'][mutation_code] = {
                'mutation': mutation,
                'position': position,
                'ddG': ddG, 
            }
    return mutations_data


mutations_data = read_mutations_from_csv('DVA_UI/static/pdbs/mutation.csv')

@app.route('/', methods=['GET'])
def index():

    # print(mutations_data)  # for debut

    # pass both 'pdb_ids' and 'mutations_data' to the template.
    return render_template('index.html', pdb_ids=mutations_data.keys(), mutations_data=mutations_data)



@app.route('/display', methods=['POST'])
def display():
    pdb_id = request.form.get('pdb_id')
    mutation_code = request.form.get('mutation')
    #  getting mutation details from mutations_data
    mutation_details = mutations_data.get(pdb_id, {}).get('mutations', {}).get(mutation_code)

    if mutation_details:
        # generate the full URL paths for the PDB files
        wildtype_pdb_url = url_for('static', filename=f'pdbs/{pdb_id}.pdb')
        mutation_pdb_url = url_for('static', filename=f'pdbs/{mutation_code}.pdb')

        # pass mutation_details to the template
        return render_template('display.html',
                               pdb_id=pdb_id,
                               mutation_details=mutation_details,
                               wildtype_pdb_url=wildtype_pdb_url,
                               mutation_pdb_url=mutation_pdb_url,
                               min_ddG=mutations_data[pdb_id]['min_ddG'],  
                               max_ddG=mutations_data[pdb_id]['max_ddG'])
    else:

        return "Error: Mutation details not found for the provided PDB ID and mutation code", 400




if __name__ == "__main__":
    app.run(debug=True)
