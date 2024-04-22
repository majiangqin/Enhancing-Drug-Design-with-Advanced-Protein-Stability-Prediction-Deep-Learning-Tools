//
//
//
// function submitPdbId() {
//     var pdbId = document.getElementById('pdbInput').value;
//     fetch('/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `pdbId=${encodeURIComponent(pdbId)}`
//     })
//     .then(response => response.json())
//     .then(data => {
//         var img = document.getElementById('pdbImage');
//         img.src = data.plot_url;
//         img.style.display = 'block';
//     })
//     .catch(error => console.error('Error:', error));
// }
//
//
//
//
// function getSelectedMutationCode() {
//     return document.getElementById('mutationSelector').value;
// }
//
// function highlightButton(button) {
//     document.querySelectorAll('button').forEach(function(btn) {
//         btn.classList.remove('button-highlight');
//     });
//       button.classList.add('button-highlight');
// }
//
//
//
//
// function display3DStructure(type) {
//     var baseUrl = "{{ url_for('static', filename='pdbs') }}/";
//     var pdbFilePath;
//
//     if (type === 'wildtype') {
//         pdbFilePath = baseUrl + "{{ pdb_id }}.pdb";
//     } else if (type === 'mutated') {
//         pdbFilePath = baseUrl + "{{ mutation_code }}.pdb";
//     }
//
//     // Use the appropriate viewer element ID based on the type
//     var viewerElementId = (type === 'wildtype') ? 'wildtypeViewer' : 'mutatedViewer';
//
//     // Wrap the element with jQuery to use .data() method
//     var viewerElement = $('#' + viewerElementId);
//
//     // Clear the existing viewer if present
//     if (viewerElement.data('viewer')) {
//         viewerElement.data('viewer').removeAllModels();
//     }
//
//     // Create a new 3Dmol.js viewer
//     var viewer = $3Dmol.createViewer(viewerElement, {
//         defaultcolors: $3Dmol.rasmolElementColors
//     });
//
//     // Store the viewer instance for future reference
//     viewerElement.data('viewer', viewer);
//
//     // Fetch the PDB file and load it into the viewer
//     $.get(pdbFilePath, function(data) {
//         viewer.addModel(data, "pdb");
//         viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
//         viewer.zoomTo();
//         viewer.render();
//     });
// }
//
// document.addEventListener("DOMContentLoaded", function() {
//     if (typeof $3Dmol !== 'undefined') {
//         // Call the function for both viewers
//         display3DStructure('wildtype');
//         display3DStructure('mutated');
//     } else {
//         console.error("3Dmol.js is not loaded.");
//     }
// });
//

