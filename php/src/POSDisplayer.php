<?php

class POSDisplayer {

    /**
     * @var string
     */
    private  $pageStateName;
    /**
     * @var DetailFrame
     */
    private  $detailDisplay;
    private  $marketBindings = [];
    private  $displayDirection = [];

    function __construct() {
        $this->pageStateName = "stage1";
    }

    public function populate(ServletRequest $request) {
        $values = $request->getParameterValues($this->pageStateName);
        if ($values && count($values) > 0) {
            array_push($this->marketBindings, $values[0]);
        }

        $detailDisplay = new DetailFrame();
        $detailDisplay->description = $this->getDetailText() . $this->getProjectionText();
        $detailDisplay->show();

        $this->setDisplayRegion(0,0,$detailDisplay->frameLength, $detailDisplay->frameWidth);
    }

    private function setDisplayRegion($aX, $aY, $bX, $bY): array {
        $this->displayDirection[0] = $aX;
        $this->displayDirection[1] = $aY;
        $this->displayDirection[2] = $bX;
        $this->displayDirection[3] = $bY;
    }

    public function showMenu() : array{
        return $this->displayDirection;
    }

    private function getDetailText(): string {
        return "detail text";
    }

    private function getProjectionText(): string {
        return "projection info";
    }

    private function getDateStamp(): string {
        return date("Y-m-d");
    }
}
