import { useState } from "react"
import { Card, Stack, Button } from "react-bootstrap"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <div className="d-flex align-items-center justify-content-center position-absolute player-container">
        <Card className="player-card border-0">
          <Card.Body className="px-3 py-2">
            <Stack
              direction="horizontal"
              gap={3}
              className="align-items-center"
            >
              <div className="album-art d-flex align-items-center justify-content-center flex-shrink-0">
                <i className="bi bi-music-note text-secondary fs-4" />
              </div>

              <div className="flex-grow-1 text-truncate">
                <span className="text-secondary small">
                  Nessun brano selezionato
                </span>
              </div>

              <Stack
                direction="horizontal"
                gap={1}
              >
                <Button
                  className="ctrl-btn d-flex align-items-center justify-content-center p-0"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? "Pausa" : "Riproduci"}
                >
                  <i
                    className={`bi bi-${isPlaying ? "pause-fill" : "play-fill"} fs-5`}
                  />
                </Button>
                <Button
                  className="ctrl-btn d-flex align-items-center justify-content-center p-0"
                  title="Avanti veloce"
                >
                  <i className="bi bi-fast-forward-fill fs-5" />
                </Button>
              </Stack>
            </Stack>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
