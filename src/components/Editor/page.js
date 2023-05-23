'use client';
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function EditableImage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    fabric.Object.prototype.transparentCorners = false;

    const rect = new fabric.Rect({
      left: 100,
      top: 50,
      width: 100,
      height: 100,
      fill: 'green',
      angle: 20,
      padding: 10
    });
    canvas.add(rect);

    fabric.loadSVGFromURL('../assets/15.svg', function(objects, options) {
      const shape = fabric.util.groupSVGElements(objects, options);
      canvas.add(shape.scale(0.6));
      shape.set({ left: 200, top: 100 }).setCoords();
      canvas.renderAll();

      canvas.forEachObject(function(obj) {
        const setCoords = obj.setCoords.bind(obj);
        obj.on({
          moving: setCoords,
          scaling: setCoords,
          rotating: setCoords
        });
      });

      canvas.on('after:render', function() {
        canvas.contextContainer.strokeStyle = '#555';

        canvas.forEachObject(function(obj) {
          const bound = obj.getBoundingRect();

          canvas.contextContainer.strokeRect(
            bound.left + 0.5,
            bound.top + 0.5,
            bound.width,
            bound.height
          );
        });
      });
    });
  }, []);

  return <canvas ref={canvasRef} />;
}

export default EditableImage;
