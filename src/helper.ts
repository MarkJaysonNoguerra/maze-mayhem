export const drawLine = (
  ctx: CanvasRenderingContext2D,
  startPoint: [number, number],
  endpoint: [number, number],
) => {
  ctx.beginPath();
  ctx.moveTo(...startPoint);
  ctx.lineTo(...endpoint);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();
};

export const drawRect = (
  ctx: CanvasRenderingContext2D,
  startPoint: [number, number],
  widthHeight: [number, number],
  filleStyle = 'blue',
) => {
  ctx.beginPath();
  ctx.rect(...startPoint, ...widthHeight);
  ctx.fillStyle = filleStyle;
  ctx.fill();
  ctx.closePath()
};

export const delay = async (t: number) =>
  new Promise((resolve: any) => setTimeout(() => resolve(), t));
