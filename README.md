# AlgoRxplorers

https://github.com/majiangqin/Enhancing-Drug-Design-with-Advanced-Protein-Stability-Prediction-Deep-Learning-Tools/assets/114206263/2a25abe6-aa5b-4e83-b909-1086154b8f14




## Description
It is an interactive web app that lets users explore the impact of amino acid point mutations on protein structure and thermostability. Users select a protein and mutation on the home screen, then are directed to a page where they can interact with the 3D structure of the protein both before and after the mutation. Users can also explore an interactive heatmap that predicts the change in thermostability based on other point mutations they did *not* select.

The 3D protein structures are generated with the help of Google's [**AlphaFold v2**](https://github.com/google-deepmind/alphafold). The predicted thermostability heatmap is generated with the help of Dieckhaus, Brocidiacono, Randolph and Kuhlman's [**ThermoMPNN**](https://github.com/Kuhlman-Lab/ThermoMPNN) model. The modeling done to support this project in developing the ThermoMPNN+ model is discussed at the end of this README, and also leverages ThermoMPNN in combination with Meta's [**ESM-2**](https://github.com/facebookresearch/esm) model.

This tool is meant to improve upon the existing drug discovery workflow. The traditional workflow is very costly and time-consuming, as it's slow to iterate through the millions of potential protein mutations for new drug candidates. With the AlgoRxplorer tool, researchers can quickly iterate through hundreds to thousands of protein mutations, explore their predicted structures and focus in on suitable candidates for further research. Mutations that bring about an increase in Gibbs free energy (ΔΔG) will be of particular interest, as that indicates a more thermally stable protein.
The checkpoint folder we have saved is our best performing model.

## Installation
Open a terminal of your choice and create a virtual env as follows
```
python -m venv /path/to/new/virtual/environment
source /path/to/new/virtual/env/Scripts/activate
pip install -r requirements.txt
```

## Execution
1. Open a terminal and navigate to the `CODE` directory
```
cd CODE
```

2. Execute the following command from the root directory to run the web app
```
python CODE/DVA_UI/app.py
```

3. Follow the instructions in the terminal to view the web app in your browser

If done successfully, the UI should look something like [**this**](https://youtu.be/8dM2V2cKwHU).

## Modeling
<img width="980" alt="best model" src="https://github.gatech.edu/storage/user/68947/files/9401e279-19cb-4795-ae68-1882ca7427c4">
 You can explore our comprehensive work on protein data modeling using the ThermoMPNN framework and insights from Chris Deotte's Novozymes research.

## Prerequisites
Our model was built on the original ThermoMPNN model on which we incorporated additional data and made model adjustments to develop our model iterations. The original model can be cloned [**here**](https://github.com/Kuhlman-Lab/ThermoMPNN/tree/main). To reiterate, the original cloned ThermoMPNN model is required to successfully run ours as it was a baseline we built on top of. ThermoMPNN recommends using the mamba framework when creating a virtual environment. We recommend conda instead, which can be set up as follows:
```
conda env create -f environment.yaml
```
This command will create a Conda environment named thermoMPNN.

## Data Setup
After setting up the environment, update the local.yaml file with the Fireprot data available at:

[**Fireprot Data**](https://zenodo.org/records/8169289)

This is essential for the models to function correctly as it contains necessary datasets. Note while the original model's repo has the link and instructions to both Megascale and FireProt, we used only FireProt due to computational limits.

 We included additional external data from [**Chris Deotte's research**](https://www.kaggle.com/code/cdeotte/xgboost-5000-mutations-200-pdb-files-lb-0-410#Create-Submission-CSV) on Novozymes in the downloaded_csv folder.

## Repository Structure
CODE/ThermoMPNN/: This directory contains the main codebase for our modeling efforts.

embeddings/: Here, you'll find the output embeddings for each model.

checkpoints/: This folder contains snapshots of the models at various training stages, allowing you to analyze their predictive performance.

## Deep Learning Models
Our models leverage embeddings from the [**ThermoMPNN**](https://github.com/Kuhlman-Lab/ThermoMPNN) framework. The original ThermoMPNN model was crucial for generating training and validation datasets for protein data.
