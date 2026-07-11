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

// Exported from upstream Sanity (project 9syto90m / production) — scenesConfig,
// inspectablesConfig, physicsConfig singletons. Do not hand-edit camera values.
export const THREE_D_CONFIG: ThreeDConfigResult = {
  "inspectables": [
    {
      "description": [
        {
          "_key": "BNIUMelL4U4h",
          "_type": "block",
          "children": [
            {
              "_key": "MnDejHc7QttL",
              "_type": "span",
              "marks": [],
              "text": "Next.js Conf: \u2018Award Site of the Day\u2019\u2014because we don\u2019t just build, we break the mold. Ready to see what happens when code meets creativity? It\u2019s bold, it\u2019s fresh, and it\u2019s here to set the bar. Let\u2019s go"
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "sotd-01",
      "specs": [
        {
          "specId": "QC4xF9TZMWy4K0KmRCEnb",
          "title": "Awarded For",
          "value": "Site of the Day"
        },
        {
          "specId": "jucuElGAuTIlRE7JPnMGh",
          "title": "SOTD Score",
          "value": "7.4"
        },
        {
          "specId": "ytNvAbBZKJjIhq6QxQwWA",
          "title": "Dev Award Score",
          "value": "7.52"
        },
        {
          "specId": "bj7ITOv5eBzmM3hVhzEvI",
          "title": "Date",
          "value": "Sep 16, 2024"
        },
        {
          "specId": "wrWVhCdNYIayVgqX6Ay17",
          "title": "Collaborators",
          "value": "EvilRabbit, GennyDee, 0ca0a"
        }
      ],
      "title": "Nextjs. Conf - Site of the Day"
    },
    {
      "description": [
        {
          "_key": "qYoz336-YYvd",
          "_type": "block",
          "children": [
            {
              "_key": "BgsPmdbYJsHJ",
              "_type": "span",
              "marks": [],
              "text": "Next.js Conf needed a stage for innovation, so we built one that matched the hype. And of course, we tossed in a game\u2014because why not?"
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "vc-ship",
      "specs": [
        {
          "specId": "pP41z4pRhh9tQDRmqIpCd",
          "title": "Purpose",
          "value": "IRL Events"
        },
        {
          "specId": "HtmZPlwTYioDLRQVJB6nQ",
          "title": "Project",
          "value": "Next.js Conf '24"
        },
        {
          "specId": "L5ZpYfN49csZJ1MYWeYY1",
          "title": "Recognition",
          "value": "Awwward - Site of the Day"
        }
      ],
      "title": " Next JS Conf"
    },
    {
      "description": [
        {
          "_key": "1LEdudZnrGWH",
          "_type": "block",
          "children": [
            {
              "_key": "zBT-omxeNhIs",
              "_type": "span",
              "marks": [],
              "text": "What if sunlight could seep through your screen? Inspired by cozy shaders, here comes the sun\u2014bringing warmth and clarity to your space. Simple, natural, and just the right touch of light. No filters, just pure daylight."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "dl-frame",
      "specs": [
        {
          "specId": "a196e92e1c0597a009f53",
          "title": "Type",
          "value": "Storefront"
        },
        {
          "specId": "4c7ef12fb09e43238fabf",
          "title": "Project",
          "value": "Daylight Computer Company"
        },
        {
          "specId": "enzsQWdtsGv8F6fbcDxvS",
          "title": "Recognition",
          "value": "Site of the Day - Awwwards"
        },
        {
          "specId": "muZUaDVae61zVuCagyPsR",
          "title": "Year",
          "value": "2024"
        }
      ],
      "title": "Daylight Computer"
    },
    {
      "description": [
        {
          "_key": "hKAKeZQhCopm",
          "_type": "block",
          "children": [
            {
              "_key": "uB39nTp-E3qF",
              "_type": "span",
              "marks": [],
              "text": "An atelier igniting art, KidSuper World took shape\u2014where an immersive 3d experience meets Brooklyn\u2019s raw creativity, blending sketches and pixels into a storefront that speaks for itself."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "kiss-bag",
      "specs": [
        {
          "specId": "4652ce818adce37eef17e",
          "title": "Type",
          "value": "Storefront"
        },
        {
          "specId": "92abadc82a312a2770d60",
          "title": "Project",
          "value": "KidSuper World"
        },
        {
          "specId": "6UWzaSOaoBj5BNlT8GNMB",
          "title": "Recognition",
          "value": "Webby People's Voice Winner in Websites and Mobile Sites - Best Use of Animation or Motion Graphics"
        },
        {
          "specId": "mcf69PNch9khuBCwLcFyM",
          "title": "Year",
          "value": "2024"
        }
      ],
      "title": "KidSuper World"
    },
    {
      "description": [
        {
          "_key": "_d6VVUP6wxlD",
          "_type": "block",
          "children": [
            {
              "_key": "Yvw9YXCBNCzk",
              "_type": "span",
              "marks": [],
              "text": "Crafted in partnership with Vercel, we designed a typeface that speaks the language of developers. It\u2019s all about precision, disruption, and giving the community a tool to create without limits. A typography made to adapt, disrupt, and empower."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "geist",
      "specs": [
        {
          "specId": "a2a4c43834475d66573d2",
          "title": "Type",
          "value": "Font Design"
        },
        {
          "specId": "Ha0rlUHqRa6B107IMH1Wa",
          "title": "Sans Usage",
          "value": "5.46M"
        },
        {
          "specId": "4204588c4add19569cad5",
          "title": "Sans Glyphs",
          "value": "825 "
        },
        {
          "specId": "LcvXGCqNjK4h1Hh5VXPfv",
          "title": "Mono Usage",
          "value": "3.56M"
        },
        {
          "specId": "0ZahvvDA3NnQEZE3dfNTH",
          "title": "Mono Glyphs",
          "value": "456"
        },
        {
          "specId": "RL3VFs59zcB6zYKGeA9H6",
          "title": "Languages Available",
          "value": "491"
        },
        {
          "specId": "qU8E6CJufvVWkQl2yNYMe",
          "title": "Year",
          "value": "2024"
        }
      ],
      "title": "Geist Sans & Mono"
    },
    {
      "description": [
        {
          "_key": "qi8YJfmAGhHJ",
          "_type": "block",
          "children": [
            {
              "_key": "XDiAvlLMCOW0",
              "_type": "span",
              "marks": [],
              "text": "Thanks, Erno, for creating a puzzle that makes us question our life choices. Solving it in 3 seconds? Sure, we\u2019ll keep pretending."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "sm-06-06",
      "specs": [
        {
          "specId": "tVrMODLyVXXE9G6AjqvsZ",
          "title": "Type",
          "value": "Puzzle"
        },
        {
          "specId": "YttlmnANPdsrRIWtN1FDG",
          "title": "Units Sold",
          "value": "450M"
        },
        {
          "specId": "a51ea264fd2f8061d4378",
          "title": "Creator",
          "value": "Erno Rubik"
        },
        {
          "specId": "WJkvgBkkRkDSPmG0RPv9U",
          "title": "Number of Combinations",
          "value": "43.252.003.274.489.856.000"
        },
        {
          "specId": "796d7bab09117ef8398e7",
          "title": "World Record by",
          "value": "Yiheng Wang"
        },
        {
          "specId": "Lw1SdAYtbHh8XMjFGpoM1",
          "title": "World Record Time",
          "value": "3.08s"
        }
      ],
      "title": "Rubik's Cube"
    },
    {
      "description": [
        {
          "_key": "SIJST_mPKsMs",
          "_type": "block",
          "children": [
            {
              "_key": "FvABqWTKf5Ss",
              "_type": "span",
              "marks": [],
              "text": "A vacuum flask, also known as a Dewar flask, Dewar bottle, or thermos flask, is an insulating storage container that allows the amount of time during which its contents remain hotter or colder than their surroundings to be greatly increased."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "termo",
      "specs": [
        {
          "specId": "epcvhttz3t6CRIQ05Pbmx",
          "title": "Type",
          "value": "Tool"
        },
        {
          "specId": "A4IXp7LOWFZqNZlz86w1P",
          "title": "Invented by",
          "value": "Sir James Dewar"
        },
        {
          "specId": "K87kv1j8kE3RAlKC1Fwuc",
          "title": "Stickers",
          "value": "Many"
        },
        {
          "specId": "R9QL7yoMWPDGPzmUrn6Vl",
          "title": "Served Mates",
          "value": "351M and counting"
        },
        {
          "specId": "xNVhusb8dJM3NjYzzBIBU",
          "title": "Material",
          "value": "Steel"
        }
      ],
      "title": "Thermos"
    },
    {
      "description": [
        {
          "_key": "tHve98Te0Zxf",
          "_type": "block",
          "children": [
            {
              "_key": "ysxKDH1bUiig",
              "_type": "span",
              "marks": [],
              "text": "Of course, we\u2019ve got baristas in-house. Sure, we can\u2019t make latte art, but at least we\u2019ve got the caffeine to make cool shit that performs."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "sm-07-02",
      "specs": [
        {
          "specId": "5659990191284c6903dc4",
          "title": "Type",
          "value": "Espresso Machine"
        },
        {
          "specId": "kgewWHkrPU8L6N3aJ08xN",
          "title": "Boiler Capacity",
          "value": "1,80L"
        },
        {
          "specId": "15917385aab38fb65ad42",
          "title": "PID Pressure Control",
          "value": "no"
        },
        {
          "specId": "fULyrvYoHnTq55XXvycwJ",
          "title": "Year",
          "value": "2023"
        },
        {
          "specId": "b6Y4FXMNgsnOTJCtdTUdz",
          "title": "Material",
          "value": "Steel"
        },
        {
          "specId": "9hhb83piDTHLHbxy8B7vK",
          "title": "Barista Mode",
          "value": "On"
        }
      ],
      "title": "Rocket Espresso"
    },
    {
      "description": [
        {
          "_key": "wZoO_x5O2vXy",
          "_type": "block",
          "children": [
            {
              "_key": "1fdPq235oXE8",
              "_type": "span",
              "marks": [],
              "text": "Yerba mate, traditionally served in a "
            },
            {
              "_key": "yCGQvuiZFUvz",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "mate gourd"
            },
            {
              "_key": "5I5mzRWVJrvr",
              "_type": "span",
              "marks": [],
              "text": " with a bombilla, is prepared by steeping a small mound of dried yerba mate in hot water at approximately "
            },
            {
              "_key": "2UTjruYkkHDS",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "80\u00b0C"
            },
            {
              "_key": "yfLl3EuqZC9v",
              "_type": "span",
              "marks": [],
              "text": ". This "
            },
            {
              "_key": "TC1D_29sU6Tw",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "bitter, rich infusion"
            },
            {
              "_key": "9EbY3MY6L-3A",
              "_type": "span",
              "marks": [],
              "text": " is deeply rooted in tradition, offering an energizing and authentic experience with every sip."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "mate",
      "specs": [
        {
          "specId": "YgfGJT5Edb8Vy303Ptcsi",
          "title": "Type",
          "value": "Infusion"
        },
        {
          "specId": "UZZgbroNwRwAv7YZ2IVLB",
          "title": "Scientific Name",
          "value": "Ilex Paraguariensis"
        }
      ],
      "title": "Mate"
    },
    {
      "description": [
        {
          "_key": "35ov8EjAIOWE",
          "_type": "block",
          "children": [
            {
              "_key": "nCBTTu6Uma-W",
              "_type": "span",
              "marks": [],
              "text": "Grab a coffee and dive into our posts \u2013 because let\u2019s be real, you\u2019ve got time to spare. Plus, it\u2019s way better than scrolling aimlessly."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "coffee",
      "specs": [
        {
          "specId": "EyF3nTxxGnuX2NDAtez15",
          "title": "Type",
          "value": "Arabica"
        },
        {
          "specId": "f1vB30a6PqYs6YOJCavb5",
          "title": "Weight",
          "value": "250g"
        },
        {
          "specId": "T6qsaHsWl1g3aB76PiFGK",
          "title": "Origin",
          "value": "Colombia"
        },
        {
          "specId": "KsXG3bPrHItYvY0CZbEYF",
          "title": "Altitude",
          "value": "1750m"
        },
        {
          "specId": "Kta0Z3T1YnR3n9FbyWyxs",
          "title": "Taste",
          "value": "Bitter Chocolate, Red Fruits & Cacao Liquor\n"
        }
      ],
      "title": "Coffee Bag"
    },
    {
      "description": [
        {
          "_key": "x_vSE9nSZv3c",
          "_type": "block",
          "children": [
            {
              "_key": "t1Nrtav5egPB",
              "_type": "span",
              "marks": [],
              "text": "Once, we built a website so cool for KidSuper that the Webby community couldn\u2019t resist. Brushes, painting, 3D magic, and a whole lot of craft\u2014the internet had no idea what hit it, and we hit it twice. No pressure."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "webby-kidsuper",
      "specs": [
        {
          "specId": "4ZSllGHrrliQ5CGzlQq1X",
          "title": "Awarded by",
          "value": "Webby Awards"
        },
        {
          "specId": "4zjf2MmqAP5uRF1hga4je",
          "title": "Awarded for",
          "value": "Excellence on the Internet including Websites, Interactive Advertising, Online Film & Video and Mobile content."
        },
        {
          "specId": "QjCFjp8MeAg5l9d5eebpv",
          "title": "Category",
          "value": "Visual Design"
        },
        {
          "specId": "8a0ba835eff60b2d07285",
          "title": "Manufacturer",
          "value": "Webby Media Group"
        },
        {
          "specId": "5a419a0ba4bf0016f6227",
          "title": "Material",
          "value": "Stainless steel"
        },
        {
          "specId": "doLVAfTvdwl2qglXsx0bS",
          "title": "Date",
          "value": "2024"
        }
      ],
      "title": "KidSuper Webby Award"
    },
    {
      "description": [
        {
          "_key": "2rJAiwtku6rs",
          "_type": "block",
          "children": [
            {
              "_key": "6C4_C71LP2_E",
              "_type": "span",
              "marks": [],
              "text": "Make it work, Make it right, Make it fast."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "nextjs",
      "specs": [
        {
          "specId": "UQ1OlJw34PJDzelsQAnOb",
          "title": "Type",
          "value": "Conference"
        },
        {
          "specId": "b71dwQVcfGJA6F9o6VJvf",
          "title": "Project",
          "value": "Nextjs Conf 24"
        },
        {
          "specId": "i0TLbTEqJ1dxJ0AXkIq5I",
          "title": "Recognition",
          "value": "Awwwards Site of the Day"
        },
        {
          "specId": "ErdLKj8Ui4rbJMByxtRiN",
          "title": "Year",
          "value": "2024"
        }
      ],
      "title": "Conf Badge"
    },
    {
      "description": [
        {
          "_key": "4yAIvZvWdC9F",
          "_type": "block",
          "children": [
            {
              "_key": "oqcyhYWsNJIL",
              "_type": "span",
              "marks": [],
              "text": "Web builders submit their websites to Awwwards\u2019 platform for a chance to be recognized as the Site of the Day."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "sotd-02",
      "specs": [
        {
          "specId": "gGCywR3LMxitQQ0iScGGZ",
          "title": "Awarded For",
          "value": "Site of the Day"
        },
        {
          "specId": "72ZqM1m2lmqtrMe6tbiju",
          "title": "SOTD Score",
          "value": "7.39"
        },
        {
          "specId": "nY5J01A8Oz7MgJCb4aBXo",
          "title": "Dev Award Score",
          "value": "7.29"
        },
        {
          "specId": "55557db39cdba65362cae",
          "title": "Date",
          "value": "Jun 18, 2024"
        }
      ],
      "title": "Daylight - Site of the Day "
    },
    {
      "description": [
        {
          "_key": "i80j9lIQXE9P",
          "_type": "block",
          "children": [
            {
              "_key": "z4J2hkHHj3bj",
              "_type": "span",
              "marks": [],
              "text": "- Can you deliver MrBeast style?"
            },
            {
              "_key": "v_Sc4feYPEUa",
              "_type": "span",
              "marks": [],
              "text": "\n"
            },
            {
              "_key": "hGmBmSe-tuoL",
              "_type": "span",
              "marks": [],
              "text": "- We built the beast\u2014no big deal. "
            }
          ],
          "markDefs": [],
          "style": "normal"
        },
        {
          "_key": "SwsZj8Nid6em",
          "_type": "block",
          "children": [
            {
              "_key": "xQP0HpnQuZsv",
              "_type": "span",
              "marks": [],
              "text": "MrBeast\u2019s fans got what they wanted, and we got the trophy. Millions of clicks, zero downtime. Just the way we like it."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "webby-mrbeast",
      "specs": [
        {
          "specId": "6b847d643ddac0899962b",
          "title": "Awarded by",
          "value": "International Academy of Digital Arts and Sciences"
        },
        {
          "specId": "GZGdewKPeCZngzMbjhl9o",
          "title": "Awarded for",
          "value": "Excellence on the Internet including Websites, Interactive Advertising, Online Film & Video and Mobile content."
        },
        {
          "specId": "Rhzev9jY2ALi0o1GNBgRx",
          "title": "Category",
          "value": "Visual Design"
        },
        {
          "specId": "uMNtWDPUjpPTfqyhkr3qN",
          "title": "Manufacturer",
          "value": "Webby Media Group"
        },
        {
          "specId": "fb53b08f35fc68109c330",
          "title": "Material",
          "value": "Stainless steel"
        },
        {
          "specId": "7K6tfBJh4y8RhGHeE7LDQ",
          "title": "Date",
          "value": "2023"
        }
      ],
      "title": "MrBeast Webby Award"
    },
    {
      "description": [
        {
          "_key": "MrY6IsiF-p1y",
          "_type": "block",
          "children": [
            {
              "_key": "NUjl9Ht8fAKQ",
              "_type": "span",
              "marks": [],
              "text": "Meet Patas, your digital mate. Half glitch, half genius, and 100% troublemaker. Born in Basement Chronicles, she is here to outsmart malware and explore the web\u2019s hidden corners. Curiosity\u2019s never a bug, it\u2019s a feature."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "patas",
      "specs": [
        {
          "specId": "0dcd301440badc29c30a9",
          "title": "Project",
          "value": "Basement Chronicles"
        },
        {
          "specId": "f745152fba5b8618ab140",
          "title": "Purpose",
          "value": "Save the World"
        },
        {
          "specId": "rECfa9ZEHFVxkg3PA0VyT",
          "title": "Best Friend",
          "value": "Theo"
        },
        {
          "specId": "euRNXfN5F6iNlbRm8GOCt",
          "title": "Operative System",
          "value": "Unknown"
        },
        {
          "specId": "mCWi4Uw6JbI2kckRQIs2r",
          "title": "Case",
          "value": "Macintosh"
        },
        {
          "specId": "es2vPAeY4cMmf4WwbkbHp",
          "title": "RAM",
          "value": "128kb"
        },
        {
          "specId": "OUXIbv9kDLkgNuAcMxjMB",
          "title": "Recognition",
          "value": "Awwward - Site of the Day"
        }
      ],
      "title": "Patas"
    },
    {
      "description": [
        {
          "_key": "Schjx05kXwDf",
          "_type": "block",
          "children": [
            {
              "_key": "Yc9YiV3Eog4R",
              "_type": "span",
              "marks": [],
              "text": "We partnered with "
            },
            {
              "_key": "gqHsZ0fg0HUP",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "EDGLRD"
            },
            {
              "_key": "oHiHIjqYm43f",
              "_type": "span",
              "marks": [],
              "text": ", the new IP-based studio led by "
            },
            {
              "_key": "iPJGxdbwjqXY",
              "_type": "span",
              "marks": [
                "strong"
              ],
              "text": "Harmony Korine"
            },
            {
              "_key": "MpPzJqRKaFAB",
              "_type": "span",
              "marks": [],
              "text": ", to craft a brand identity that embodies its raw vision. By creating digital chaos, EDGLRD is redefining the game\u2014one manic creation at a time."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "edglrd",
      "specs": [
        {
          "specId": "ZPLmqh1qcEYZY8JfbqFHk",
          "title": "Type",
          "value": "Branding & Website"
        },
        {
          "specId": "TbSMwF6H8txRpGFRJwFM7",
          "title": "Project",
          "value": "Edglrd"
        },
        {
          "specId": "17Sve7NLAJXgBjQ6uptez",
          "title": "Director",
          "value": "Harmony Korine"
        },
        {
          "specId": "0fHr0Iq1ZowIQY47FENPE",
          "title": "Year",
          "value": "2023"
        }
      ],
      "title": "EDGLRD SK8"
    },
    {
      "description": [
        {
          "_key": "mO-2sjLKbm0B",
          "_type": "block",
          "children": [
            {
              "_key": "5C7yWfuOyyyT",
              "_type": "span",
              "marks": [],
              "text": "Facundo\u2019s over there, chilling on the dark side of the moon, soaking in Gilmour\u2019s solos, while Jose is vibing to Bad Bunny, bringing the heat with every beat. We\u2019re just riding the wave of difference, but somehow, it all works. Oh, and Facundo got a photo with Pink Floyd\u2019s drummer, Nick Mason\u2014no big deal, just casually hanging with legends."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "pink-floyd",
      "specs": [
        {
          "specId": "d8fcc3f4c81244e3fc534",
          "title": "Released",
          "value": "1 March 1973"
        },
        {
          "specId": "3NIKgrGRet2pBt2YCpEbt",
          "title": "Recorded",
          "value": "31 May 1972 \u2013 9 February 1973"
        },
        {
          "specId": "bt0TnTBhmmcl1vBao2UlG",
          "title": "Length",
          "value": "42:50"
        },
        {
          "specId": "xC7s6kVfeEeWNdAVQcFCN",
          "title": "Genre",
          "value": "Progressive Rock"
        },
        {
          "specId": "IN957hejsYDEWQe7ywOUb",
          "title": "Times Played",
          "value": "30 million+ on streaming platforms\u2014and counting"
        },
        {
          "specId": "B8b6QYLDMNaxSgsVaYgLo",
          "title": "Awards",
          "value": "Grammy Hall of Fame, among countless others."
        },
        {
          "specId": "njJpRKdDGSxjzNKf5Lkpz",
          "title": "Producer",
          "value": "Pink Floyd"
        }
      ],
      "title": "The Dark Side of the Moon"
    },
    {
      "description": [
        {
          "_key": "pVVxwK6tlO2r",
          "_type": "block",
          "children": [
            {
              "_key": "i6S7O9-H44Ru",
              "_type": "span",
              "marks": [],
              "text": "We brought the heat, he brought the mask. A new chapter for YouTube\u2019s legend. Who needs rules when you\u2019ve got a mask that cool? Merch, madness, and enough energy to make even superheroes jealous."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "swaggersouls",
      "specs": [
        {
          "specId": "uRzTI3PFkrIfe5ELL3lCp",
          "title": "Type",
          "value": "Storefront"
        },
        {
          "specId": "fDTAxwwgNGESFxXMG3sDk",
          "title": "YouTube Subscribers",
          "value": "4.88M"
        },
        {
          "specId": "zPhdIHuTH1zIelHDcLXkk",
          "title": "Project",
          "value": " Website design"
        },
        {
          "specId": "BpSXUCtcFdcqTDlCQiJB8",
          "title": "Plushie Voice Lines",
          "value": "15"
        },
        {
          "specId": "9TnHUVosh6n9yAHnbGY6H",
          "title": "Year",
          "value": "2021"
        }
      ],
      "title": "SwaggerSouls Plushie"
    },
    {
      "description": [
        {
          "_key": "TruArtColv8m",
          "_type": "block",
          "children": [
            {
              "_key": "KOhXWSvGEm6W",
              "_type": "span",
              "marks": [],
              "text": "We unleashed the Beast. No rules, no slowing down, just the kind of retro-vibes we love. Cool merch, mini-games, and worldwide subscribers."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "mr-beast",
      "specs": [
        {
          "specId": "5T8vMmuFht1JxurgxDrud",
          "title": "Type",
          "value": "Storefront"
        },
        {
          "specId": "U0H7HiashMSrpCcGYNT1K",
          "title": "YouTube Subscribers",
          "value": "373M and Counting..."
        },
        {
          "specId": "VFtOVAKffgADeAecTeYHi",
          "title": "Project",
          "value": "Shop MrBeast"
        },
        {
          "specId": "TXMqqcHmt5ev5Fg1UCyfv",
          "title": "Recognition",
          "value": "Webby People's Voice Winner in Websites and Mobile Sites - Shopping & Retail / Awwwards \u2013 Site of the Day"
        },
        {
          "specId": "qixkziQn9lOFh47fCBbSt",
          "title": "Year",
          "value": "2022"
        }
      ],
      "title": "Shop MrBeast"
    },
    {
      "description": [
        {
          "_key": "tr5QLcgDrc8S",
          "_type": "block",
          "children": [
            {
              "_key": "wEZJLhK5h09k",
              "_type": "span",
              "marks": [],
              "text": "We worked with Vercel for Ship, a gathering of the brightest minds shaping the future of AI and developer experience, to create a brand identity that speaks directly to real builders. This isn\u2019t just another tech event\u2014it\u2019s where innovation goes from cool to next"
            },
            {
              "_key": "1twVfAJF_6Uu",
              "_type": "span",
              "marks": [
                "em"
              ],
              "text": " "
            },
            {
              "_key": "Sr5Yy35bwXh-",
              "_type": "span",
              "marks": [],
              "text": "level."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "inspectableId": "vercel-ship-2324",
      "specs": [
        {
          "specId": "bede9a30f59dcc19d06dc",
          "title": "Type",
          "value": "IRL Event"
        },
        {
          "specId": "4aca261e148efdaad921d",
          "title": "Project",
          "value": "Vercel Ship '24"
        },
        {
          "specId": "qmxz30Chgphh3ruTzk3VO",
          "title": "Global Attendees",
          "value": "+70K"
        },
        {
          "specId": "c9dSzExeHi4UrhP5OTbGL",
          "title": "IRL Attendees",
          "value": "1000"
        },
        {
          "specId": "biqMleLuijLtlciaGYbU2",
          "title": "Year",
          "value": "2024"
        },
        {
          "specId": "KwoGH1yNpa6XacnoKfWkm",
          "title": "Location",
          "value": "NYC"
        }
      ],
      "title": "Vercel Ship Conf"
    }
  ],
  "physics": {
    "physicsParams": [
      {
        "title": "forward strength",
        "value": 0.035
      },
      {
        "title": "upward strength",
        "value": 0.085
      }
    ]
  },
  "scenes": [
    {
      "cameraConfig": {
        "fov": 20,
        "offsetMultiplier": 0,
        "posX": 8.76,
        "posY": 1.13,
        "posZ": -13,
        "tarX": 8.95,
        "tarY": 1.12,
        "tarZ": -13.83,
        "targetScrollY": -1.5
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0,
        "bloomThreshold": 10,
        "brightness": 0.31,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.8,
        "vignetteSpread": 0.75
      },
      "sceneName": "404",
      "tabs": []
    },
    {
      "cameraConfig": {
        "fov": 50,
        "offsetMultiplier": 0,
        "posX": 5.2,
        "posY": 1.65,
        "posZ": -7.7,
        "tarX": 5.2,
        "tarY": 2.2,
        "tarZ": -12,
        "targetScrollY": 0
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0.15,
        "bloomThreshold": 10,
        "brightness": 0.31,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.8,
        "vignetteSpread": 0.75
      },
      "sceneName": "basketball",
      "tabs": [
        {
          "plusShapeScale": 1,
          "tabClickableName": "Basketball_Home_Left_Hover",
          "tabHoverName": "Go Back Home",
          "tabName": "basketball_home_left",
          "tabRoute": "home"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "Basketball_Home_Right_Hover",
          "tabHoverName": "Go Back Home",
          "tabName": "basketball_home_right",
          "tabRoute": "home"
        }
      ]
    },
    {
      "cameraConfig": {
        "fov": 45.74,
        "offsetMultiplier": 0.25,
        "posX": 12.3,
        "posY": 4.27,
        "posZ": -16.49,
        "tarX": 11.43,
        "tarY": 4.35,
        "tarZ": -16.93,
        "targetScrollY": 3.9
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0.15,
        "bloomThreshold": 10,
        "brightness": 0.31,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.8,
        "vignetteSpread": 0.75
      },
      "sceneName": "blog",
      "tabs": [
        {
          "plusShapeScale": 1,
          "tabClickableName": "BlogShowcase_Hover",
          "tabHoverName": "Go to Showcase",
          "tabName": "showcase_hover",
          "tabRoute": "showcase"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "BlogHome_Hover",
          "tabHoverName": "Go Back Home",
          "tabName": "home_hover",
          "tabRoute": "/"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "BlogPeople_Hover",
          "tabHoverName": "Go to People",
          "tabName": "people_hover",
          "tabRoute": "people"
        }
      ]
    },
    {
      "cameraConfig": {
        "fov": 45,
        "offsetMultiplier": 0,
        "posX": 8.154,
        "posY": 1.236,
        "posZ": -13,
        "tarX": 8.154,
        "tarY": 1.236,
        "tarZ": -13.9,
        "targetScrollY": 1.236
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0,
        "bloomThreshold": 10,
        "brightness": 0.32,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.7,
        "vignetteSpread": 0.75
      },
      "sceneName": "doom",
      "tabs": []
    },
    {
      "cameraConfig": {
        "fov": 64.65,
        "offsetMultiplier": 0.25,
        "posX": 6.26,
        "posY": 1.16,
        "posZ": -7.57,
        "tarX": 5.93,
        "tarY": 1.29,
        "tarZ": -8.51,
        "targetScrollY": -0.1
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0.15,
        "bloomThreshold": 10,
        "brightness": 0.31,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.8,
        "vignetteSpread": 0.75
      },
      "sceneName": "home",
      "tabs": [
        {
          "plusShapeScale": 1,
          "tabClickableName": "Services1_Hover",
          "tabHoverName": "Go to Services",
          "tabName": "services_1",
          "tabRoute": "services"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "Showcase_Hover",
          "tabHoverName": "Go to Showcase",
          "tabName": "showcase",
          "tabRoute": "showcase"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "Laboratory_Hover",
          "tabHoverName": "Go to Lab",
          "tabName": "lab",
          "tabRoute": "lab"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "People_Hover",
          "tabHoverName": "Go to People",
          "tabName": "people",
          "tabRoute": "people"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "Game_Hover",
          "tabHoverName": "Play Basketball",
          "tabName": "basketball",
          "tabRoute": "basketball"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "Blog_Hover",
          "tabHoverName": "Go to Blog",
          "tabName": "blog",
          "tabRoute": "blog"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "Services2_Hover",
          "tabHoverName": "Go to Services",
          "tabName": "services_2",
          "tabRoute": "services"
        }
      ]
    },
    {
      "cameraConfig": {
        "fov": 35.11,
        "offsetMultiplier": 0,
        "posX": 2.96,
        "posY": 1.05,
        "posZ": -12.89,
        "tarX": 2.96,
        "tarY": 1.25,
        "tarZ": -13.87,
        "targetScrollY": 0
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0,
        "bloomThreshold": 10,
        "brightness": 0.31,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.8,
        "vignetteSpread": 0.75
      },
      "sceneName": "lab",
      "tabs": [
        {
          "plusShapeScale": 0.1,
          "tabClickableName": "LaboratoryHome_HoverA",
          "tabHoverName": "Go Back Home",
          "tabName": "laboratory_home_hover_a",
          "tabRoute": "/"
        },
        {
          "plusShapeScale": 0.1,
          "tabClickableName": "LaboratoryHome_HoverB",
          "tabHoverName": "Go Back Home",
          "tabName": "laboratory_home_hover_b",
          "tabRoute": "/"
        }
      ]
    },
    {
      "cameraConfig": {
        "fov": 60.84,
        "offsetMultiplier": 0.25,
        "posX": 2.41,
        "posY": 5.29,
        "posZ": -28.77,
        "tarX": 3.46,
        "tarY": 5.23,
        "tarZ": -27.66,
        "targetScrollY": 4.23
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0.15,
        "bloomThreshold": 10,
        "brightness": 0.31,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.8,
        "vignetteSpread": 0.75
      },
      "sceneName": "people",
      "tabs": [
        {
          "plusShapeScale": 1,
          "tabClickableName": "PeopleBlog_Hover",
          "tabHoverName": "Go to Blog",
          "tabName": "PeopleBlog_Hover",
          "tabRoute": "blog"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "PeopleHome_Hover",
          "tabHoverName": "Go Back Home",
          "tabName": "PeopleHome_Hover",
          "tabRoute": "/"
        }
      ]
    },
    {
      "cameraConfig": {
        "fov": 55,
        "offsetMultiplier": 0.5,
        "posX": 6,
        "posY": 1.53,
        "posZ": -10.21,
        "tarX": 4.3,
        "tarY": 1.53,
        "tarZ": -7.88,
        "targetScrollY": 0.8
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0.15,
        "bloomThreshold": 10,
        "brightness": 0.31,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.8,
        "vignetteSpread": 0.75
      },
      "sceneName": "services",
      "tabs": [
        {
          "plusShapeScale": 1,
          "tabClickableName": "ServicesHome_Hover",
          "tabHoverName": "Go Back Home",
          "tabName": "services_home",
          "tabRoute": "/"
        }
      ]
    },
    {
      "cameraConfig": {
        "fov": 29.39,
        "offsetMultiplier": 0.5,
        "posX": 7.03,
        "posY": 4.89,
        "posZ": -12.66,
        "tarX": 4.03,
        "tarY": 4.89,
        "tarZ": -12.66,
        "targetScrollY": 2.89
      },
      "postprocessing": {
        "bloomRadius": 5,
        "bloomStrength": 0.15,
        "bloomThreshold": 10,
        "brightness": 0.31,
        "contrast": 1,
        "exposure": 0.54,
        "gamma": 0.73,
        "vignetteRadius": 0.8,
        "vignetteSpread": 0.75
      },
      "sceneName": "showcase",
      "tabs": [
        {
          "plusShapeScale": 1,
          "tabClickableName": "ShowcaseHome_Hover",
          "tabHoverName": "Go Back Home",
          "tabName": "ShowcaseHome_Hover",
          "tabRoute": "/"
        },
        {
          "plusShapeScale": 1,
          "tabClickableName": "ShowcasePeople_Hover",
          "tabHoverName": "Go to People",
          "tabName": "ShowcasePeople_Hover",
          "tabRoute": "/people"
        }
      ]
    }
  ]
}

export async function fetchThreeDConfig(): Promise<ThreeDConfigResult> {
  return THREE_D_CONFIG
}
