import type { PortableTextBlock } from "./types"

interface InspectableContent {
  inspectableId?: string
  title?: string
  specs?: Array<{ specId?: string; title?: string; value?: string }>
  description?: PortableTextBlock[]
}

interface SceneTab {
  tabName?: string
  tabRoute?: string
  tabHoverName?: string
  tabClickableName?: string
  plusShapeScale?: number
}

interface SceneConfig {
  sceneName?: string
  cameraConfig?: {
    posX?: number
    posY?: number
    posZ?: number
    tarX?: number
    tarY?: number
    tarZ?: number
    fov?: number
    targetScrollY?: number
    offsetMultiplier?: number
  }
  postprocessing?: {
    contrast?: number
    brightness?: number
    exposure?: number
    gamma?: number
    vignetteRadius?: number
    vignetteSpread?: number
    bloomStrength?: number
    bloomRadius?: number
    bloomThreshold?: number
  }
  tabs?: SceneTab[]
}

export interface ThreeDConfigResult {
  inspectables: InspectableContent[] | null
  scenes: SceneConfig[] | null
  physics: { physicsParams?: Array<{ title?: string; value?: number }> } | null
}

const defaultPostprocessing = {
  contrast: 1,
  brightness: 1,
  exposure: 1,
  gamma: 1,
  vignetteRadius: 1,
  vignetteSpread: 1,
  bloomStrength: 1,
  bloomRadius: 1,
  bloomThreshold: 1
}

const defaultCamera = {
  posX: 0,
  posY: 0,
  posZ: 0,
  tarX: 0,
  tarY: 0,
  tarZ: 0,
  fov: 60,
  targetScrollY: -1.5,
  offsetMultiplier: 1
}

function scene(
  sceneName: string,
  tabs: Array<{ tabName: string; tabRoute: string }>
): SceneConfig {
  return {
    sceneName,
    cameraConfig: defaultCamera,
    postprocessing: defaultPostprocessing,
    tabs: tabs.map((tab) => ({
      tabName: tab.tabName,
      tabRoute: tab.tabRoute,
      tabHoverName: tab.tabName,
      tabClickableName: "",
      plusShapeScale: 1
    }))
  }
}

const NAV_TABS = [
  { tabName: "Home", tabRoute: "/" },
  { tabName: "Showcase", tabRoute: "/showcase" },
  { tabName: "Services", tabRoute: "/services" },
  { tabName: "Blog", tabRoute: "/blog" },
  { tabName: "People", tabRoute: "/people" }
]

export const THREE_D_CONFIG: ThreeDConfigResult = {
  inspectables: [],
  scenes: [
    scene("home", NAV_TABS),
    scene("showcase", NAV_TABS),
    scene("services", NAV_TABS),
    scene("blog", NAV_TABS),
    scene("people", NAV_TABS),
    scene("404", NAV_TABS)
  ],
  physics: { physicsParams: [] }
}

export async function fetchThreeDConfig(): Promise<ThreeDConfigResult> {
  return THREE_D_CONFIG
}
