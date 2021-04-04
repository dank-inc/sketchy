export type SketchFrame = (params: SketchParams) => void

// export type Sketch = (params: SketchParams) => SketchFrame

export type Sketch = (params: SketchParams) => Frame // generator
export type Frame = (params: SketchParams) => void // stateless frame

export type SketchParams = {
  time: number
  context: CanvasRenderingContext2D
  width: number
  height: number
  animated?: boolean
}

export type SketchConfig = {
  containerId?: string
  animate?: true
  dimensions?: Vec2
  startTime?: number
}

export type Vec2 = [number, number]

export type SketchState = {
  sketch: Sketch
  t: number
}
