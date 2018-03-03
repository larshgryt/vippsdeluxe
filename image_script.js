
            let imgElement1 = document.getElementById('imageSrc1');
            let imgElement2 = document.getElementById('imageSrc2');
            let inputElement1 = document.getElementById('fileInput1');
            let inputElement2 = document.getElementById('fileInput2');
            let run_button = document.getElementById('run_button');

            var image_compare_callback;
            
            
            
            function compare_images() {
                
                var canvas = document.getElementById('canvas');
                var context = canvas.getContext('2d');
                var width = canvas.width / 2;
                var height = canvas.height;
                var image1 = document.getElementById('imageSrc1');
                var image2 = document.getElementById('imageSrc2');
            
            
                window.descriptorLength = 256;
                window.matchesShown = 30;
                window.blurRadius = 3;
                var doMatch = function() {
                  tracking.Brief.N = window.descriptorLength;
                  context.drawImage(image1, 0, 0, width, height);
                  context.drawImage(image2, width, 0, width, height);
              
                  var imageData1 = context.getImageData(0, 0, width, height);
                  var imageData2 = context.getImageData(width, 0, width, height);
              
                  var gray1 = tracking.Image.grayscale(tracking.Image.blur(imageData1.data, width, height, blurRadius), width, height);
                  var gray2 = tracking.Image.grayscale(tracking.Image.blur(imageData2.data, width, height, blurRadius), width, height);
              
                  var corners1 = tracking.Fast.findCorners(gray1, width, height);
                  var corners2 = tracking.Fast.findCorners(gray2, width, height);
              
                  var descriptors1 = tracking.Brief.getDescriptors(gray1, width, corners1);
                  var descriptors2 = tracking.Brief.getDescriptors(gray2, width, corners2);
              
                  var matches = tracking.Brief.match(corners1, descriptors1, corners2, descriptors2);
            
                  matches.sort(function(a, b) {
                    return b.confidence - a.confidence;
                  });
            
                  let n_matches = Math.min(window.matchesShown, matches.length);
            
                  let clustering_distances_x = new Array();
                  let clustering_distances_y = new Array();
                  
                  let avg_clustering_distance = 0;
            
                  let avg_x = 0;
                  let avg_y = 0;
            
              
                  for (var i = 0; i < n_matches; i++) {
                    var color = '#' + Math.floor(Math.random()*16777215).toString(16);
                    context.fillStyle = color;
                    context.strokeStyle = color;
                    context.fillRect(matches[i].keypoint1[0], matches[i].keypoint1[1], 4, 4);
                    context.fillRect(matches[i].keypoint2[0] + width, matches[i].keypoint2[1], 4, 4);
                    context.beginPath();
                    context.moveTo(matches[i].keypoint1[0], matches[i].keypoint1[1]);
                    context.lineTo(matches[i].keypoint2[0] + width, matches[i].keypoint2[1]);
                    context.stroke();
            
            
                    clustering_distances_x[i] = matches[i].keypoint1[0] - matches[i].keypoint2[0];
                    clustering_distances_y[i] = matches[i].keypoint1[1] - matches[i].keypoint2[1];
            
                    avg_x += clustering_distances_x[i];
                    avg_y += clustering_distances_y[i];
            
                  }
            
                  avg_x /= n_matches;
                  avg_y /= n_matches;
            
                  for (var i = 0; i < n_matches; i++) {
                      clustering_distances_x[i] -= avg_x;
                      clustering_distances_y[i] -= avg_y;
            
                      avg_clustering_distance += Math.sqrt(clustering_distances_x[i]**2 + clustering_distances_y[i]**2) / n_matches;
                  }
            
                  
            
                  console.log(avg_clustering_distance);
                  image_compare_callback(avg_clustering_distance);
            
            
            
                };
                doMatch();
            
                
            };
            inputElement1.addEventListener('change', (e) => {
              imgElement1.src = URL.createObjectURL(e.target.files[0]);
            }, false);
            inputElement2.addEventListener('change', (e) => {
              imgElement2.src = URL.createObjectURL(e.target.files[0]);
            }, false);
            imgElement2.addEventListener('load', (e) => {
                compare_images();
            }, false);